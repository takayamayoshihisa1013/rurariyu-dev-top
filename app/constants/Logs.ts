type Log = {
  text: string;
  type?: "command" | "success" | "info" | "error";
  delay: number;
  elapsed: number;
};

export const logs: Log[] = [
  {
    text: "rurariyu.dev v1.0.0",
    type: "command",
    delay: 200,
    elapsed: 200,
  },
  {
    text: "Booting Development Environment...",
    type: "command",
    delay: 200,
    elapsed: 400,
  },
  {
    text: "Loading Yoshihisa Takayama's Life 🍀",
    type: "command",
    delay: 400,
    elapsed: 800,
  },
  {
    // 技術スタックは1行にまとめてスッキリ（案A）
    text: "React / Next.js / TypeScript loaded",
    type: "success",
    delay: 400,
    elapsed: 1200,
  },
  {
    text: "Portfolio initialized",
    type: "success",
    delay: 400,
    elapsed: 1600,
  },
  {
    // 深夜徘徊（案C）
    text: "night_walk_mode ... enabled 🌙",
    type: "success",
    delay: 300,
    elapsed: 1900,
  },
  {
    // 目覚まし拒否（案C）
    text: "alarm_clock ... permission denied",
    type: "error",
    delay: 300,
    elapsed: 2200,
  },
  {
    // コーヒーは必須（案A）
    text: "coffee_machine ... ready ☕",
    type: "success",
    delay: 400,
    elapsed: 2600,
  },
  {
    // sleep_schedule（案A）
    text: "warning: sleep_schedule not found",
    type: "info",
    delay: 300,
    elapsed: 2900,
  },
  {
    text: "System Ready.",
    type: "info",
    delay: 400,
    elapsed: 3300,
  },
  {
    text: "all good — welcome!",
    delay: 300,
    elapsed: 3600,
  },
];