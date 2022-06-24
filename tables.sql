CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"price" numeric NOT NULL,
	"image" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.orders" (
	"id" serial NOT NULL,
	"user_id" bigint NOT NULL,
	"cake_id" bigint NOT NULL,
	"quantidity" bigint NOT NULL,
	"create_at" timestamp with time zone NOT NULL DEFAULT ' NOW()',
	"total_price" numeric NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES "clients"("id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cake_id") REFERENCES "cakes"("id");



