UPDATE Dim_Ubicacion u
SET latitud = d.latitud,
    longitud = d.longitud
FROM Tabla_Maestra_Divipola d
WHERE u.codigo_dane = d.codigo_municipio;