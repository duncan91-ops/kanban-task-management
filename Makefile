ifneq (,(wildcard ./server/.env))
include ./server/.env
export
ENV_FILE_PARAM = --env-file ./server/.env 

endif

build:
	docker compose up -d --build --remove-orphans

up:
	docker compose up -d

down:
	docker compose down 

down-v:
	docker compose down -v

show-logs:
	docker compose logs

migrate:
	docker compose exec api python3 manage.py migrate

makemigrations:
	docker compose exec api python3 manage.py makemigrations

collectstatic:
	docker compose exec api python3 manage.py collectstatic --no-input --clear

superuser:
	docker compose exec api python3 manage.py createsuperuser
