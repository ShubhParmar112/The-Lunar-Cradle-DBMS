CREATE TABLE IF NOT EXISTS restaurant_reservations (
    id INTEGER PRIMARY KEY,
    primary_member TEXT NOT NULL,
    guests INTEGER NOT NULL
);