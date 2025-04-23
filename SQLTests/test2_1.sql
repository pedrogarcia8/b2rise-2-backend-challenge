-- Consulta com Agregação

SELECT
  product,
  SUM(quantity * price) total_revenue
FROM
  sales
GROUP BY 
  product
ORDER BY
  total_revenue DESC;