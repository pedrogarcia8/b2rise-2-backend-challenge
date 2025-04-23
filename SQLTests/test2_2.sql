-- Identificar Registros Duplicados

SELECT
  email,
  COUNT(email) AS email_count
FROM
  users
GROUP BY
  email
HAVING
  COUNT(email) > 1;
