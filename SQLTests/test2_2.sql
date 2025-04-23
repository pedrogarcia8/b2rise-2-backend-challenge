-- Identificar Registros Duplicados

SELECT
  email,
  COUNT(email) email_count
FROM
  users
GROUP BY
  email
HAVING
  COUNT(email) > 1;
