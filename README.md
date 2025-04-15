# HealthTrack Patient Health Management System

## Description

HealthTrack is a React.js-based platform for managing patient health records, streamlining workflows for healthcare providers, and improving patient outcomes.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Component Overview](#component-overview)
- [Routing Structure](#routing-structure)
- [State Management](#state-management)

## Installation

To set up the project locally:
git clone <https://github.com/NesliHumber/group-project-frontEndProgramming.git>

## Features

- Role-based landing page
- Dynamic pricing plans
- Testimonials and success stories
- FAQ section
- Contact form with submission confirmation
- Centralized API service

## Component Overview

| Component/Page                | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **HomePage / RoleSelector**   | Landing page to select a role (physician, nurse, patient). Manages the selected role state using React Context.   |
| **PricingPage**               | Displays subscription plans fetched from the API. Handles loading and error states.                               |
| **PricingDetailPage**         | Shows detailed information about a specific pricing plan, using dynamic routing based on the plan name.           |
| **TestimonialsPage**          | Lists testimonials and success stories fetched from the API.                                                      |
| **FAQPage**                   | Presents frequently asked questions, fetched from the API. Includes a form for submitting new questions.          |
| **ContactPage**               | Contact form for user inquiries. On submission, redirects to the Thank You page.                                  |
| **ThankYouPage**              | Simple confirmation page displayed after successful contact form submission.                                      |
| **AboutPage**                 | Describes the project’s vision, history, and leadership team.                                                     |
| **API Service**               | Contains functions to fetch FAQs, pricing plans, testimonials, and success stories. Also handles contact form submission.|

## Routing Structure

| Route                | Component/Page          | Purpose                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `/`                  | HomePage/RoleSelector   | Entry point for selecting user role.                                                    |
| `/pricing`           | PricingPage             | Displays a list of available subscription plans.                                        |
| `/pricing/[name]`    | PricingDetailPage       | Shows details for a specific pricing plan using a dynamic route.                        |
| `/testimonials`      | TestimonialsPage        | Displays user testimonials and success stories.                                         |
| `/faq`               | FAQPage                 | Presents frequently asked questions.                                                    |
| `/contact`           | ContactPage             | Contact form for user inquiries.                                                        |
| `/thank-you`         | ThankYouPage            | Confirmation page after submitting the contact form.                                    |
| `/about`             | AboutPage               | Provides background information about the project and the team behind it.               |

## State Management

The application uses various state management techniques:

-   **`useState` Hook:**  Used in components like `PricingPage`, `TestimonialsPage`, and `FAQPage` for managing local component state, such as storing fetched data (`plans`, `testimonials`, `faqs`), handling loading states (`loading`), and managing errors (`error`).
-   **`useEffect` Hook:**  Works in conjunction with `useState` to handle side effects. Examples include fetching pricing plans in `PricingPage`, testimonials and success stories in `TestimonialsPage`, and FAQs in `FAQPage`.
-   **React Context API:**  Employed in the `HomePage / RoleSelector` to manage the global `selectedRole` state, making it accessible throughout the application. This allows role-based rendering and navigation based on the user's selected role.
-   **API Service (`/services/api.js`):** Centralizes data fetching.

