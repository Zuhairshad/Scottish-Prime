import { Badge } from "@/components/ui/badge";

export function CompareForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <form
      action="/quote"
      method="get"
      className={`rounded-[12px] p-6 md:p-8 ${
        isDark
          ? "bg-house-green text-white border border-white/10"
          : "bg-white border border-hairline shadow-card"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <Badge variant="green-soft">Live prices</Badge>
        <span
          className={`t-body-sm ${
            isDark ? "text-white/70" : "text-ink-soft"
          }`}
        >
          Takes under 4-13 hours
        </span>
      </div>

      <h3 className={`t-h4 ${isDark ? "text-white" : "text-ink"}`}>
        Get instant quotes
      </h3>
      <p
        className={`t-body-sm mt-2 ${
          isDark ? "text-white/70" : "text-ink-soft"
        }`}
      >
        Enter your business postcode to compare 20+ suppliers.
      </p>

      <div className="mt-5 space-y-3">
        <Field
          label="Business postcode"
          name="postcode"
          placeholder="e.g. M1 4BT"
          required
          dark={isDark}
        />
        <Field
          label="Business name"
          name="businessName"
          placeholder="Your Company Ltd"
          dark={isDark}
        />
        <div className="grid grid-cols-2 gap-3">
          <Select
            label="Energy type"
            name="energyType"
            options={[
              { value: "electricity", label: "Electricity" },
              { value: "gas", label: "Gas" },
              { value: "both", label: "Both" },
            ]}
            dark={isDark}
          />
          <Select
            label="Renewal month"
            name="renewal"
            options={[
              { value: "1m", label: "Within 1 month" },
              { value: "1-3m", label: "1–3 months" },
              { value: "3m+", label: "3+ months" },
            ]}
            dark={isDark}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 t-button bg-accent-green text-white rounded-[50px] py-3 press hover:brightness-110 inline-flex items-center justify-center gap-2"
      >
        Compare prices →
      </button>

      <p
        className={`t-body-sm mt-4 text-center ${
          isDark ? "text-white/70" : "text-ink-soft"
        }`}
      >
        No credit check · Free to use · Trustpilot 4.8 / 5
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  dark,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  dark: boolean;
}) {
  return (
    <label className="block">
      <span
        className={`t-body-sm-med ${
          dark ? "text-white" : "text-ink"
        } block mb-1.5`}
      >
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </span>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        className={`w-full h-11 rounded-[8px] px-3 t-body outline-none focus:border-accent-green focus:border-2 ${
          dark
            ? "bg-white/5 border border-white/20 text-white placeholder:text-white/40"
            : "bg-white border border-hairline-strong text-ink placeholder:text-ink-soft"
        }`}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  dark,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  dark: boolean;
}) {
  return (
    <label className="block">
      <span
        className={`t-body-sm-med ${
          dark ? "text-white" : "text-ink"
        } block mb-1.5`}
      >
        {label}
      </span>
      <select
        name={name}
        defaultValue={options[0].value}
        className={`w-full h-11 rounded-[8px] px-3 t-body outline-none focus:border-accent-green focus:border-2 ${
          dark
            ? "bg-white/5 border border-white/20 text-white"
            : "bg-white border border-hairline-strong text-ink"
        }`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-ink">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
