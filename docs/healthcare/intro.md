---
sidebar_position: 2
---

# Health Care

These sections will focus on Implementation Guides. These publications are produced from plan text files, in a specialised format. The overarching group which provides Health Care standards is [Health Level 7 (HL7)](https://www.hl7.org/).

The following material will progress through the key concepts in a fast-forward and replay approach.

## Canonical Model

A Canonical Model is a simplified, standard way of representing data or concepts across different systems or processes. Think of it as a "universal translator" that helps different parts of a system or different systems understand each other by using a common language or format. Instead of having to deal with many different ways of saying the same thing, a Canonical Model provides a single, agreed-upon way to represent that information, making it easier to share, integrate, and process data.

### Fast Healthcare Interoperability Resources (FHIR)

[FHIR](https://www.hl7.org/fhir/overview.html) is a common language for healthcare data. It’s a standard developed to help different healthcare systems talk to each other more easily.

In healthcare, there’s a lot of data—like patient records, lab results, prescriptions—and this data is often stored in different systems that don't naturally work well together. FHIR provides a standardized way to represent this data so that these different systems can share and understand it without a lot of extra work.

Imagine FHIR as a set of building blocks or Lego pieces, where each block represents a specific piece of healthcare information (like a patient, a medication, or an appointment). These blocks can be easily combined and reused across different systems, making it simpler to exchange information between hospitals, clinics, apps, and devices. The goal is to improve communication and coordination in healthcare, ultimately leading to better patient care.

## Markdown

Markdown is a simple way to write and format text that can easily be converted into different formats, like HTML for websites. It’s like shorthand for creating documents with headings, lists, links, and other basic formatting, without needing to know complex coding.

Imagine you’re writing a note and want to emphasize a word, create a list, or add a link. Instead of using a fancy editor or complicated tools, you use simple symbols. For example, putting asterisks around a word makes it italic, or using a hash symbol (#) before a line turns it into a header.

Markdown is popular because it’s easy to read in its raw form and can be quickly turned into more polished formats, making it a favorite for writing documentation, notes, and even content for websites (like this one).

### FHIR Shorthand

FSH, or FHIR Shorthand, is a specialized language designed to make it easier to create and define FHIR resources, which are the building blocks of healthcare data in the FHIR standard. Just like Markdown simplifies formatting text, FSH simplifies writing complex FHIR profiles, extensions, and other components by using a straightforward and human-readable syntax.

Imagine you’re setting up a new healthcare system and need to define how patient data, lab results, or medications should be structured according to FHIR. Instead of manually crafting each FHIR resource in a more complex format like JSON or XML, you use FSH to write these definitions in a more concise and understandable way. FSH uses simple keywords and structure to describe how FHIR resources should be shaped and how they relate to each other.

For example, if you want to define a specific type of patient resource, you can use FSH to outline what fields are required, what values they should hold, and how they connect to other resources. Once you’ve written this in FSH, it can be automatically converted into the full FHIR format that systems understand.

FSH is like a specialized toolkit that makes working with FHIR easier, allowing healthcare developers to quickly and clearly define how data should be organized and used in a FHIR-based system.


