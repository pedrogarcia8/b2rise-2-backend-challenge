-- Consulta com JOIN e Filtragem

SELECT
  c.name category_name,
  b.name product_name,
  SUM(a.quantity) total_quantity_sold
FROM
  sales a
INNER JOIN 
  products b ON (a.product_id = b.id)
INNER JOIN
  categories c ON (b.category_id = c.id)
WHERE
  c.id IN (
    SELECT 
      d.category_id 
    FROM 
      products d 
    INNER JOIN 
      sales e ON (d.id = e.product_id)
    GROUP BY
      d.category_id
    HAVING 
      SUM(e.quantity) > 100
  )
GROUP BY
  c.name, b.name
ORDER BY
  category_name,
  total_quantity_sold DESC;
