// Formats a YYYY-MM-DD date string deterministically so server and client
// render identical markup (avoids hydration mismatches with Date locale).
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}
