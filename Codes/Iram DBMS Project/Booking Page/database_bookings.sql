
CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY,
    primary_guest TEXT NOT NULL,
    guests INTEGER NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    nights INTEGER NOT NULL
);