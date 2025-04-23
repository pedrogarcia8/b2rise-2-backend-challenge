-- Criação e Consulta de uma VIEW

CREATE VIEW monthly_summary AS
SELECT
  account_id,
  MONTH(transaction_date) AS month,
  SUM(amount) AS total_amount
FROM
  transactions
GROUP BY
  account_id, MONTH(transaction_date);


SELECT
  account_id,
  month,
  total_amount
FROM
  monthly_summary
WHERE
  total_amount > 10000;