-- MIGRATIONS
CREATE TABLE tbl_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR(99) UNIQUE,
  INDEX idx_user(user)
);

CREATE TABLE tbl_roles (
  user_id int,
  company_name VARCHAR(99),
  role VARCHAR(99),
  FOREIGN KEY(user_id) REFERENCES tbl_users(id)
);

CREATE TABLE tbl_profiles (
  user_id int,
  first_name VARCHAR(99),
  last_name VARCHAR(99),
  middle_name VARCHAR(99),
  email VARCHAR(99),
  phone VARCHAR(11),
  address VARCHAR(200),
  FOREIGN KEY(user_id) REFERENCES tbl_users(id)
);

CREATE TABLE tbl_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  content_text BIT,
  content_file BIT,
  content VARCHAR(7999),
  sender_id INT,
  receiver_id INT,
  content_seen BIT DEFAULT 0,
  company_name VARCHAR(99),
  FOREIGN KEY(sender_id) REFERENCES tbl_users(id),
  FOREIGN KEY(receiver_id) REFERENCES tbl_users(id),
  INDEX idx_sent_at(sent_at),
  INDEX idx_sender_id(sender_id),
  INDEX idx_receiver_id(receiver_id)
);

CREATE TABLE tbl_messages_head (
  message_id INT,
  sender_id INT,
  receiver_id INT,
  FOREIGN KEY(message_id) REFERENCES tbl_messages(id),
  FOREIGN KEY(sender_id) REFERENCES tbl_users(id),
  FOREIGN KEY(receiver_id) REFERENCES tbl_users(id),
  INDEX idx_message_id(message_id),
  INDEX idx_sender_id(sender_id),
  INDEX idx_receiver_id(receiver_id)
);

CREATE TABLE tbl_messages_head_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sent_at DATETIME,
  sender_id INT,
  receiver_id INT,
  INDEX idx_sender_id(sender_id),
  INDEX idx_receiver_id(receiver_id)
);

CREATE TABLE tbl_messages_logs (
  head_id INT,
  sent_at DATETIME,
  content_text BIT,
  content_file BIT,
  content VARCHAR(7999),
  sender_id INT,
  receiver_id INT,
  content_seen BIT DEFAULT 0,
  company_name VARCHAR(99),
  FOREIGN KEY(head_id) REFERENCES tbl_messages_head_logs(id),
  INDEX idx_sent_at(sent_at),
  INDEX idx_sender_id(sender_id),
  INDEX idx_receiver_id(receiver_id)
);