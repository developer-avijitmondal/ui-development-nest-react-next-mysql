# 🐳 MySQL + phpMyAdmin (Docker Setup)

This setup runs **MySQL 8** and **phpMyAdmin** using Docker.

---

## 🚀 Start Services

Run the following command:

```bash
docker-compose up -d
```

---

## 🌐 Access phpMyAdmin

Open in browser:

```
http://localhost:8080/
```

---

## 🔑 MySQL Credentials

* **Host:** mysql
* **Port:** 3306
* **User:** root
* **Password:** Test@123
* **Database:** mydb

---

## 📦 docker-compose.yml

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql_db
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: Test@123
      MYSQL_DATABASE: mydb
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin_app
    restart: always
    ports:
      - "8080:80"
    environment:
      PMA_HOST: mysql
      PMA_USER: root
      PMA_PASSWORD: Test@123
    depends_on:
      - mysql

volumes:
  mysql_data:
```

---

## 🧹 Stop Services

```bash
docker-compose down
```

---

## ⚠️ Notes

* Ensure Docker is installed and running
* Port `3306` and `8080` should be free
* Data is persisted using Docker volume (`mysql_data`)

---
