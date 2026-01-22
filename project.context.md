# 🌍 Project Context: Santoza
**Version**: 2.0 (Real Data) | **Phase**: Validation

## 🏢 Business Identity
- **Name**: شركة سنتوزا للتجارة والتوزيع (Santoza for Trading and Distribution)
- **Location**: Aleppo, Salah El-Din, Opposite Sharia High School Gate.
- **Contact**: 0940285006, 0936774834.
- **Industry**: B2B Food Distribution (Candy, Chocolate, Biscuits).

## 🎯 Primary Objective
Professional Digital Catalog & Ordering System (WhatsApp-based).
- **Core Function**: Browse Products → Add to Cart → Send Order via WhatsApp.
- **Target Audience**: Shop owners, wholesalers, salons.
- **Key Requirement**: "State of the Art" 2026 Design, Simple, High Performance.

## ⛔ Constraints & Boundaries
- **NO Payment Gateway**.
- **NO User Login** (Guest Checkout only).
- **NO Complex Backend** (Simple JSON or minimal CMS).
- **Language**: Syrian Arabic (Simple/Clear).

## 🎨 Design DNA (Gate 2)
- **Style**: Premium Corporate yet Vibrant (Candy Industry).
- **Colors**: Derived from Logo (To be defined in Tokens).
- **Voice**: "The Expert" (Professional, Trustworthy, Simple).

## 📦 Data Schema (Gate 3)
- **Product Entity**:
  - `id`: string (e.g., "k1")
  - `name`: string
  - `category`: "Candy" | "Chocolate" | "Biscuit" | "Other"
  - `price_syp`: number
  - `price_try`: number
  - `packing_carton`: string (e.g., "6 bags")
  - `packing_inner`: string (e.g., "1kg bag")
  - `image`: string (path)
  - `notes`: string?

## 📊 Success Metrics (Gate 5)
- **KPI**: Number of WhatsApp Orders Initiated.
- **User Pain Relief**: Eliminating manual phone ordering errors.
