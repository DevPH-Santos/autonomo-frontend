import './Grafico.css'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// ---------------------------------------------------------------------------
// Dados estáticos
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} WeeklyRevenue
 * @property {string} name   - Rótulo da semana exibido no eixo X (ex.: "SEMANA 1").
 * @property {number} receita - Receita apurada na semana, em reais.
 */

/**
 * Dados de receita semanal utilizados no gráfico de área.
 *
 * @type {WeeklyRevenue[]}
 * @constant
 */
const data = [
    { name: "SEMANA 1", receita: 1000 },
    { name: "SEMANA 2", receita: 150 },
    { name: "SEMANA 3", receita: 1000 },
    { name: "SEMANA 4", receita: 150 },
];

const Grafico = () => {
    return (
        <>

            {/**
            * Gráfico de área responsivo utilizando Recharts.
            *
            * - `ResponsiveContainer` garante adaptação ao contêiner pai.
            * - O gradiente `colorReceita` aplica preenchimento suave abaixo da linha.
            * - `type="natural"` suaviza a curva com interpolação cúbica.
            *
            * @see {@link https://recharts.org/en-US/api/AreaChart} Recharts AreaChart
            */}
            <div className="chart-content" style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#0b5ed7" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#0b5ed7" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            padding={{ left: 20, right: 20 }}
                            tick={{
                                fill: "#94a3b8",
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: "-0.05em",
                            }}
                            tickFormatter={(value) => value.toUpperCase()}
                        />

                        {/* YAxis ocultado — valores inferíveis pela altura da área */}
                        <YAxis hide />

                        <Tooltip />

                        <Area
                            type="natural"
                            dataKey="receita"
                            stroke="#0b5ed7"
                            strokeWidth={2.5}
                            fill="url(#colorReceita)"
                            dot={{ r: 4, strokeWidth: 2, fill: "#0b5ed7", stroke: "#fff" }}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default Grafico