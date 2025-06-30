import { useState, useEffect } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useEmailInvite(maxVisibleChips: number) {
  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popperOpen, setPopperOpen] = useState(false);

  const hiddenChips = emails.slice(maxVisibleChips);

  useEffect(() => {
    if (hiddenChips.length === 0) {
      setPopperOpen(false);
    }
  }, [hiddenChips]);

  function handleInputChange(value: string) {
    setInputValue(value);
    setError(null);
  }

  function handleEmailsChange(newEmails: string[]) {
    const lastInput = newEmails[newEmails.length - 1]?.trim().toLowerCase();

    if (lastInput && !EMAIL_REGEX.test(lastInput)) {
      setError("❌ Please enter a valid email.");
      return;
    }

    setEmails(Array.from(new Set(newEmails)));
    setInputValue("");
    setError(null);
  }

  function handleRemove(email: string) {
    setEmails(emails.filter((e) => e !== email));
  }

  return {
    emails,
    inputValue,
    error,
    anchorEl,
    popperOpen,
    hiddenChips,
    handleInputChange,
    handleEmailsChange,
    handleRemove,
    showHidden: (anchor: HTMLElement) => {
      setAnchorEl(anchor);
      setPopperOpen(true);
    },
    closePopper: () => setPopperOpen(false),
  };
}