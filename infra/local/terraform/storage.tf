resource "google_storage_bucket" "kanban" {
  name                        = var.bucket
  location                    = "EU"
  force_destroy               = true
  uniform_bucket_level_access = true
}

resource "google_service_account" "storage" {
  account_id   = var.storage_account_id
  display_name = "Kanban Storage SA"
}

data "google_iam_policy" "storage" {
  binding {
    role = "roles/storage.admin"

    members = [
      "serviceAccount:${google_service_account.storage.email}"
    ]
  }

  binding {
    role = "roles/storage.objectViewer"

    members = [
      "allUsers"
    ]
  }
}

resource "google_storage_bucket_iam_policy" "kanban" {
  bucket      = google_storage_bucket.kanban.name
  policy_data = data.google_iam_policy.storage.policy_data
}
