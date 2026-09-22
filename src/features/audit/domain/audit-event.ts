export type AuditEvent = {
  id: number;
  occurred_at: string;
  transaction_id: number;
  actor_id: string | null;
  actor_role: string | null;
  origin: string;
  entity_type: string;
  operation: string;
  entity_id: string;
  course_id: string | null;
  subject_id: string | null;
  before_data: unknown;
  after_data: unknown;
  request_id: string | null;
};
