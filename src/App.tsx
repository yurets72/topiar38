import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Leaf,
  MapPinned,
  MountainSnow,
  Sprout,
  Star,
  Trees,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "./lib/utils";

const stats = [
  { value: "32%", label: "рост озеленённых зон" },
  { value: "18", label: "проектов в разработке" },
  { value: "4.9/5", label: "усреднённый рейтинг" },
];

const features = [
  {
    icon: Trees,
    title: "Городские решения",
    text: "Планируем функциональные и красивые пространства для жизни, отдыха и экологии.",
  },
  {
    icon: Leaf,
    title: "Экологичный подход",
    text: "Используем местные материалы, устойчивую флору и климатические решения.",
  },
  {
    icon: MapPinned,
    title: "Локальный контекст",
    text: "Учитываем особенности Иркутска, рельеф, микроклимат и инфраструктуру.",
  },
  {
    icon: Zap,
    title: "Технологии и data",
    text: "Комбинируем проектирование, визуализацию и стратегический анализ территории.",
  },
];

const process = [
  {
    number: "01",
    title: "Анализ",
    text: "Собираем данные по участку, среде и задачам проекта.",
  },
  {
    number: "02",
    title: "Концепт",
    text: "Разрабатываем пространственную идею и визуальную модель.",
  },
  {
    number: "03",
    title: "Реализация",
    text: "Подготавливаем рабочую дорожную карту для запуска и продвижения.",
  },
];

const projects = [
  {
    title: "Парк будущего",
    subtitle: "Общественное пространство",
    tone: "from-emerald-400/20 to-brand-500/10",
    accent: "bg-emerald-500",
  },
  {
    title: "Уличное озеленение",
    subtitle: "Городская среда",
    tone: "from-amber-400/20 to-orange-500/10",
    accent: "bg-amber-500",
  },
  {
    title: "Сады и дворы",
    subtitle: "Приватные и общественные",
    tone: "from-sky-400/20 to-cyan-500/10",
    accent: "bg-sky-500",
  },
];

const testimonials = [
  {
    quote:
      "Команда не просто сделала красивую концепцию — они помогли сформировать идею, которая реально работает для города.",
    author: "Алексей М.",
    role: "Предприниматель, городская среда",
  },
  {
    quote:
      "Понравился баланс между эстетикой и практичностью. В итоге появился понятный, сильный визуальный стандарт.",
    author: "Марина С.",
    role: "Дизайнер городской среды",
  },
];

const nav = ["О проекте", "Преимущества", "Как работаем", "Портфолио", "Контакты"];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-800">
      <header className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
        <nav className="glass sticky top-4 z-50 flex items-center justify-between rounded-full border border-slate-200/80 px-5 py-3 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                Topiary
              </p>
              <p className="text-xs text-slate-500">Иркутск</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700">
            Связаться
          </button>
        </nav>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                <Sprout className="h-4 w-4" />
                Умное озеленение и дизайн среды
              </div>

              <h1 className="max-w-xl text-balance text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
                Создаём красивое пространство для жизни в городе
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Мы проектируем зелёные решения для общественных пространств, дворов и городской среды — так,
                чтобы они были полезны людям, красивы и устойчивы.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-medium text-white shadow-soft hover:bg-brand-700">
                  Узнать подробнее
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-slate-200 bg-white px-6 py-3.5 font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50">
                  Смотреть проекты
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-black text-slate-900">{item.value}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-10 top-16 h-32 w-32 rounded-full bg-brand-200/70 blur-3xl" />
              <div className="absolute -bottom-4 right-8 h-32 w-32 rounded-full bg-emerald-200/80 blur-3xl" />

              <div className="card-shine relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-card">
                <div className="rounded-[1.6rem] bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Общий индекс среды</p>
                      <div className="mt-2 flex items-end gap-2">
                        <span className="text-4xl font-black text-slate-900">87</span>
                        <span className="pb-1 text-sm text-brand-700">/100</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-brand-100 p-3 text-brand-700">
                      <Trees className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                        <span className="text-sm font-medium text-slate-600">Площади</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">+28%</span>
                    </div>

                    {[72, 84, 92, 76].map((value, index) => (
                      <div key={index} className="mt-4">
                        <div className="mb-2 flex justify-between text-xs text-slate-500">
                          <span>Зона {index + 1}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={cn(
                              "h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-500",
                              index === 0 && "w-[72%]",
                              index === 1 && "w-[84%]",
                              index === 2 && "w-[92%]",
                              index === 3 && "w-[76%]"
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                      <div className="flex items-center gap-2 text-brand-700">
                        <MountainSnow className="h-4 w-4" />
                        <span className="text-sm font-medium">Климат</span>
                      </div>
                      <p className="mt-2 text-xl font-bold text-slate-900">Устойчиво</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                      <div className="flex items-center gap-2 text-brand-700">
                        <Users className="h-4 w-4" />
