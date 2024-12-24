# Kafka Microservices Project

A demonstration of microservices architecture using Apache Kafka for message exchange between services

## Architecture

The project consists of two microservices:
- `kafka-pub`: Publisher service (Producer)
- `kafka-sub`: Subscriber service (Consumer) with PostgreSQL data persistence

### Infrastructure
- Apache Kafka: Message broker
- Zookeeper: Kafka cluster coordination
- PostgreSQL: Database for processed messages

## Prerequisites

- Node.js v20+
- Docker & Docker Compose
- pnpm

## Installation

### For kafka-pub
```bash
cd kafka-pub
pnpm install
```

### For kafka-sub
```bash
cd kafka-sub
pnpm install
```

## In project root directory
```bash
docker compose up -d
```

## Migrations

```bash
docker exec -it learn-kafka-postgres-1 psql -U postgres -d kafka_db
```

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

```bash
cd kafka-sub
pnpm migration:generate
pnpm migration:run
```
