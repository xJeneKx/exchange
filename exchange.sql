CREATE TABLE contracts (
	my_address CHAR(32) NOT NULL,
	shared_address CHAR(32) NOT NULL,
	peer_address CHAR(32),
	peer_device_address CHAR(33) NOT NULL,
	my_amount INT NOT NULL,
    peer_amount INT NOT NULL,
	timeout BIGINT NOT NULL,
	checked_timeout_date TIMESTAMP NULL,
	refunded INT NOT NULL DEFAULT 0,
	unlock_unit CHAR(44),
	unlocked_date TIMESTAMP NULL,
	creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (shared_address),
    FOREIGN KEY (shared_address) REFERENCES shared_addresses(shared_address),
    FOREIGN KEY (unlock_unit) REFERENCES units(unit),
);

CREATE INDEX byCheckedTimeoutDate ON contracts(checked_timeout_date);
CREATE INDEX byCheckedFlightDate ON contracts(checked_flight_date);
