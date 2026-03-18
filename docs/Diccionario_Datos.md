# Diccionario de Datos - AgroMetrics

**Arquitectura:** Esquema en Estrella (Star Schema) OLAP
**Motor Base de Datos:** PostgreSQL

El presente diccionario detalla la estructura física de la base de datos analítica, diseñada para optimizar las consultas del Dashboard y cruzar las fuentes del DANE (EVA/ENA) e IDEAM.

## 1. Tabla de Hechos (Fact Table)

Centraliza las métricas de rendimiento y producción.
**Nombre de la tabla:** `Fact_Rendimiento_Agricola`

| Columna              | Tipo de Dato  | Llave | Descripción                                     | Origen / Transformación        |
| :------------------- | :------------ | :---: | :---------------------------------------------- | :----------------------------- |
| `id_rendimiento`     | SERIAL        |  PK   | Identificador único del registro transaccional. | Autoincremental                |
| `id_ubicacion`       | INT           |  FK   | Relación con la dimensión espacial.             | Cruce con `Dim_Ubicacion`      |
| `id_cultivo`         | INT           |  FK   | Relación con la dimensión del producto.         | Cruce con `Dim_Cultivo`        |
| `id_tiempo`          | INT           |  FK   | Relación con la dimensión temporal.             | Cruce con `Dim_Tiempo`         |
| `area_sembrada_ha`   | DECIMAL(12,2) |   -   | Total de hectáreas sembradas.                   | CSV: `Área sembrada` (limpio)  |
| `area_cosechada_ha`  | DECIMAL(12,2) |   -   | Total de hectáreas cosechadas con éxito.        | CSV: `Área cosechada` (limpio) |
| `produccion_ton`     | DECIMAL(12,2) |   -   | Volumen recolectado en toneladas.               | CSV: `Producción` (limpio)     |
| `rendimiento_ton_ha` | DECIMAL(8,2)  |   -   | Eficiencia productiva (Toneladas / Hectárea).   | CSV: `Rendimiento` (limpio)    |

---

## 2. Tablas de Dimensiones (Dimension Tables)

Almacenan los atributos de contexto por los cuales el usuario podrá filtrar en la interfaz.

### Dimensión: Ubicación

**Nombre de la tabla:** `Dim_Ubicacion`
| Columna | Tipo de Dato | Llave | Descripción |
| :--- | :--- | :---: | :--- |
| `id_ubicacion` | SERIAL | PK | Identificador único de la dimensión. |
| `codigo_dane` | VARCHAR(5) | UQ | Código oficial DIVIPOLA a 5 dígitos (con ceros a la izquierda). |
| `departamento` | VARCHAR(100)| - | Nombre del departamento (Ej. Antioquia). |
| `municipio` | VARCHAR(100)| - | Nombre del municipio. |
| `region` | VARCHAR(100)| - | Región natural (Ej. Andina, Orinoquía). |
| `latitud` | DECIMAL(10,8)| - | Coordenada Y (obtenida del maestro DIVIPOLA). |
| `longitud` | DECIMAL(11,8)| - | Coordenada X (obtenida del maestro DIVIPOLA). |

### Dimensión: Cultivo

**Nombre de la tabla:** `Dim_Cultivo`
| Columna | Tipo de Dato | Llave | Descripción |
| :--- | :--- | :---: | :--- |
| `id_cultivo` | SERIAL | PK | Identificador único de la dimensión. |
| `nombre_cultivo` | VARCHAR(100)| - | Especie agrícola (Ej. Aguacate, Yuca). |
| `grupo_cultivo` | VARCHAR(100)| - | Categorización general (Ej. Frutales, Raíces). |
| `ciclo_productivo` | VARCHAR(50) | - | Clasificación del ciclo (Ej. Permanente, Transitorio). |
| `estado_fisico` | VARCHAR(50) | - | Estado de recolección (Ej. En fresco). |

### Dimensión: Tiempo

**Nombre de la tabla:** `Dim_Tiempo`
| Columna | Tipo de Dato | Llave | Descripción |
| :--- | :--- | :---: | :--- |
| `id_tiempo` | SERIAL | PK | Identificador único de la dimensión. |
| `anio` | INT | - | Año de la evaluación agrícola (Ej. 2022, 2023). |
| `periodo` | VARCHAR(10) | - | Semestre o corte (Ej. 2022A, 2022B). |
