"use client";

export function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label
          htmlFor="name"
          className="block text-xs text-muted-foreground mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-transparent border-b-2 border-border py-2 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs text-muted-foreground mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full bg-transparent border-b-2 border-border py-2 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs text-muted-foreground mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message..."
          required
          className="w-full bg-transparent border-b-2 border-border py-2 text-sm outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          className="border border-foreground px-12 py-3 text-sm font-medium tracking-wide uppercase hover:text-muted-foreground hover:border-muted-foreground transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
