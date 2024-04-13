CREATE TABLE `clients` (
	`id` serial,
	`name` varchar(256),
	`phone` int,
	`debt` int,
	`date` datetime,
	`nodebt` boolean,
	`quote` int,
	`totaldebt` int,
	`totalquote` int,
	CONSTRAINT `clients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `outproducts` (
	`id` serial,
	`nrofactura` int,
	`date` date,
	`quantity` int,
	`products_Id` int,
	CONSTRAINT `outproducts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` serial,
	`name` varchar(256),
	`priceUnit` int,
	`quantity` int,
	`totalStockValue` int,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `suppliers` (
	`id` serial,
	`name` varchar(256),
	`phone` int,
	`direction` varchar(256),
	CONSTRAINT `suppliers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial,
	`name` varchar(256),
	`last_name` varchar(256),
	`username` varchar(256),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
