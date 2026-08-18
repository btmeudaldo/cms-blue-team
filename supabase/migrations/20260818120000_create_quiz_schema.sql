-- Migración para Tablas de Evaluaciones (Quizzes) y Resultados (Quiz Attempts)

-- 1. Tabla de Quizzes
CREATE TABLE IF NOT EXISTS public.quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
    lesson_slug TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    min_pass_score_percentage INTEGER NOT NULL DEFAULT 70,
    questions JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Habilitar RLS para Quizzes
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;

-- Políticas de Quizzes
CREATE POLICY "Quizzes are viewable by everyone" ON public.quizzes
    FOR SELECT USING (true);

CREATE POLICY "Instructors and Admins can insert quizzes" ON public.quizzes
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

CREATE POLICY "Instructors and Admins can update quizzes" ON public.quizzes
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

CREATE POLICY "Instructors and Admins can delete quizzes" ON public.quizzes
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );

-- 2. Tabla de Quiz Attempts
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
    score_percentage INTEGER NOT NULL,
    correct_count INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    passed BOOLEAN NOT NULL DEFAULT false,
    elapsed_seconds INTEGER NOT NULL,
    completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índice para mejorar las búsquedas por usuario y quiz
CREATE INDEX idx_quiz_attempts_user_id ON public.quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_quiz_id ON public.quiz_attempts(quiz_id);

-- Habilitar RLS para Quiz Attempts
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Políticas de Quiz Attempts
CREATE POLICY "Users can view their own quiz attempts" ON public.quiz_attempts
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quiz attempts" ON public.quiz_attempts
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz attempts" ON public.quiz_attempts
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Instructors and admins can view all quiz attempts" ON public.quiz_attempts
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role IN ('instructor', 'admin')
        )
    );
