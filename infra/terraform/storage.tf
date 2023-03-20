resource "google_storage_bucket" "kanban" {
  name          = var.bucket_name
  location      = "EU"
  force_destroy = true

  uniform_bucket_level_access = true

  cors {
    origin = ["*"]
    method = ["GET", "HEAD", "PUT", "POST", "DELETE"]
  }
}
