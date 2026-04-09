import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { experienceGraphData } from "../data/experienceGraph";

export default function ExperienceGraph() {
  return (
    <section className="py-10 md:py-14 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-200">
          Experience Growth
        </h3>

        <p className="text-sm md:text-base text-slate-400 max-w-2xl mb-6 md:mb-8">
          A visual overview of my frontend journey across enterprise and fintech environments, reflecting growth in responsibility, complexity, and impact.
        </p>

        <div className="h-64 md:h-80 bg-slate-950 rounded-2xl p-4 md:p-5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={experienceGraphData}>
              <XAxis dataKey="year" stroke="#94a3b8" tickLine={false} />
              <YAxis hide domain={[0, 9]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#e5e7eb" }}
                itemStyle={{ color: "#6366f1" }}
                formatter={(value, name, props) => [
                  `Impact Level: ${value}`,
                  props.payload.label,
                ]}
              />
              <Line
                type="monotone"
                dataKey="level"
                stroke="#6366f1"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
}
