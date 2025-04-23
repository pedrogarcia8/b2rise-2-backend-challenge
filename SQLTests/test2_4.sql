-- Consulta com JOIN Simples

SELECT
  b.name,
  COUNT(a.id) total_orders
FROM
  orders a
INNER JOIN 
  customers b ON (a.customer_id = b.id)
GROUP BY
  b.name
ORDER BY
  total_orders DESC;