/**
 * Sanitize a markdown-compiled HTML template for safe Angular compilation.
 *
 * Escapes `{`, `}`, `@` that are not part of Angular control flow,
 * preserves recognized control flow blocks (@if, @for, @switch, @let, @defer …),
 * decodes HTML entities inside them, and protects `<pre>` code blocks.
 */
export declare function sanitizeTemplate(template: string): string;
