# Documento de Definición de Indicadores Productivos Clave (KPIs)

**Proyecto:** AgroMetrics
**Fuente de Datos:** `EVA_ENA_consolidado`

Este documento formaliza las métricas principales que alimentarán el panel de control (Dashboard). Establece la trazabilidad desde la base de datos cruda hasta la visualización final, definiendo las transformaciones necesarias.

### KPI 1: Superficie Total Sembrada

- **Descripción:** Representa la extensión total de tierra (en hectáreas) destinada al cultivo durante un periodo y ubicación filtrados. Permite medir el volumen de adopción agrícola.
- **Columna de Origen (CSV):** `Área sembrada`
- **Fórmula / Agregación:** `SUM(Area_Sembrada)`
- **Regla de Transformación (ETL):** Los datos entrantes tipo _String_ (ej. "3.500,00") deben despojarse de comillas, reemplazar el punto de miles (si existe) por vacío, y la coma decimal por un punto (.) para ser casteados a `DECIMAL(12,2)` antes de sumar.

### KPI 2: Producción Agrícola Total

- **Descripción:** Volumen total de alimento o materia prima recolectada (en toneladas) que está lista para comercialización.
- **Columna de Origen (CSV):** `Producción`
- **Fórmula / Agregación:** `SUM(Produccion)`
- **Regla de Transformación (ETL):** Misma regla de casteo de _String_ a `DECIMAL` que el KPI 1.

### KPI 3: Rendimiento Promedio de Cultivo

- **Descripción:** Es el indicador de eficiencia central del proyecto. Mide cuántas toneladas se extraen por cada hectárea cultivada.
- **Columnas de Origen (CSV):** `Rendimiento` o `ena_rendimiento_ton_ha`.
- **Fórmula / Agregación:** Se debe utilizar un promedio ponderado o la fórmula directa: `SUM(Producción) / SUM(Área cosechada)` para evitar distorsiones estadísticas al promediar promedios.
- **Visualización:** Se presentará con un (1) decimal (ej. 5.8 Ton/Ha).

### KPI 4: Tasa de Eficiencia de Cosecha

- **Descripción:** Indicador analítico que evalúa la pérdida operativa. Compara la tierra que se sembró versus la que realmente llegó a la etapa de cosecha.
- **Columnas de Origen (CSV):** `Área sembrada` y `Área cosechada`
- **Fórmula / Agregación:** `(SUM(Área cosechada) / SUM(Área sembrada)) * 100`
- **Visualización:** Porcentaje (%). Un valor del 100% indica pérdida cero.

### Dimensiones de Análisis (Filtros Globales)

Todos los KPIs anteriores deben recalcularse dinámicamente en el Dashboard cuando el usuario interactúe con los siguientes cortes de información:

- **Filtro Geográfico:** Por `Departamento` y `Municipio`.
- **Filtro de Producto:** Por `Grupo cultivo` y `Cultivo`.
- **Filtro Temporal:** Por `Año`.
