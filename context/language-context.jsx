"use client"

import { createContext, useContext, useState, useEffect } from "react"

// English translations
const enTranslations = {
  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    applications: "Applications",
    calculator: "Weight Calculator",
    contact: "Contact Us",
  },
  buttons: {
    learnMore: "Learn More",
    contactUs: "Contact Us",
    viewProducts: "View Products",
    calculate: "Calculate",
    submit: "Submit",
    send: "Send Message",
  },
  forms: {
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    subject: "Subject",
    company: "Company",
    quantity: "Quantity",
  },
}

// Russian translations
const ruTranslations = {
  nav: {
    home: "Главная",
    about: "О нас",
    products: "Продукция",
    applications: "Применение",
    calculator: "Калькулятор веса",
    contact: "Контакты",
  },
  buttons: {
    learnMore: "Узнать больше",
    contactUs: "Связаться с нами",
    viewProducts: "Посмотреть продукцию",
    calculate: "Рассчитать",
    submit: "Отправить",
    send: "Отправить сообщение",
  },
  forms: {
    name: "Имя",
    email: "Эл. почта",
    phone: "Номер телефона",
    message: "Сообщение",
    subject: "Тема",
    company: "Компания",
    quantity: "Количество",
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")
  const [translations, setTranslations] = useState(enTranslations)

  useEffect(() => {
    // Update translations when language changes
    if (language === "en") {
      setTranslations(enTranslations)
      document.documentElement.lang = "en"
    } else if (language === "ru") {
      setTranslations(ruTranslations)
      document.documentElement.lang = "ru"
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, translations }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

