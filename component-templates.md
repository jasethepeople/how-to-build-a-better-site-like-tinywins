# Component Templates

This file contains reusable component templates for creative studio websites. Copy and customize these as needed.

## Hero Component Template

```tsx
import { motion } from "framer-motion";

interface HeroProps {
  backgroundImage: string;
  headline: string;
  subheadline: string;
  accentWord?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export default function Hero({
  backgroundImage,
  headline,
  subheadline,
  accentWord,
  ctaText = "START A PROJECT",
  ctaAction,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}>
            {headline}
            {accentWord && (
              <span style={{ color: "#FF4D1C" }}> {accentWord}</span>
            )}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            {subheadline}
          </p>
          {ctaText && (
            <motion.button
              onClick={ctaAction}
              className="px-8 py-4 border-2 border-coral text-coral font-semibold tracking-widest uppercase hover:bg-coral hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
```

## Portfolio Card Template

```tsx
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function PortfolioCard({
  title,
  category,
  image,
  onClick,
}: PortfolioCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
        <p style={{ color: "#FF4D1C" }} className="text-xs font-semibold tracking-widest uppercase mb-2">
          {category}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
          className="text-2xl font-bold">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
```

## Testimonial Card Template

```tsx
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  image,
}: TestimonialProps) {
  return (
    <motion.div
      className="border border-gray-700 rounded-lg p-8 hover:border-coral transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {image && <img src={image} alt={author} className="w-12 h-12 rounded-full mb-4" />}
      <p className="text-gray-300 italic mb-6">"{quote}"</p>
      <p className="text-coral font-semibold mb-1">{author}</p>
      <p className="text-gray-400 text-sm">{title}</p>
    </motion.div>
  );
}
```

## CTA Section Template

```tsx
import { motion } from "framer-motion";

interface CTASectionProps {
  headline: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  backgroundGradient?: string;
}

export default function CTASection({
  headline,
  description,
  buttonText,
  buttonAction,
  backgroundGradient = "from-gray-900 to-black",
}: CTASectionProps) {
  return (
    <section className={`bg-gradient-to-r ${backgroundGradient} py-20 md:py-32`}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
            className="text-5xl md:text-6xl font-black mb-6">
            {headline}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
          <motion.button
            onClick={buttonAction}
            className="px-12 py-4 border-2 border-coral text-coral font-semibold tracking-widest uppercase hover:bg-coral hover:text-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
```

## Section Header Template

```tsx
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16 md:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p style={{ color: "#FF4D1C", fontFamily: "'DM Sans', sans-serif" }}
        className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
        {label}
      </p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#F2EDE8" }}
        className="text-5xl md:text-7xl font-black leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-300 max-w-2xl">{description}</p>
      )}
    </motion.div>
  );
}
```

## Animated Counter Template

```tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function Counter({ value, label, suffix = "" }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-black mb-2" style={{ color: "#FF4D1C" }}>
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
}
```

## Form Input Template

```tsx
import { motion } from "framer-motion";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormInputProps) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block text-sm font-semibold mb-2" style={{ color: "#F2EDE8" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded text-cream placeholder-gray-500 focus:border-coral focus:outline-none transition-colors"
        style={{ color: "#F2EDE8" }}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </motion.div>
  );
}
```

## Usage Instructions

1. Copy the template code that matches your component needs
2. Customize colors, text, and styling to match your brand
3. Replace placeholder content with real data
4. Import and use in your pages
5. Adjust animations and transitions as needed for your design
