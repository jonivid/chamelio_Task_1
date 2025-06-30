import React from 'react';
import { Autocomplete, TextField, Box, Chip } from '@mui/material';
import { InviteChip } from './InviteChip';

interface InviteInputProps {
  emails: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
  setEmails: (value: string[]) => void;
  maxVisibleChips: number;
  onShowHidden: (anchor: HTMLElement) => void;
  onRemove: (email: string) => void;
}

export const InviteInput: React.FC<InviteInputProps> = ({
  emails,
  inputValue,
  setInputValue,
  setEmails,
  maxVisibleChips,
  onShowHidden,
  onRemove,
}) => {
  const visibleChips = emails.slice(0, maxVisibleChips);
  const hiddenChips = emails.slice(maxVisibleChips);

  return (
    <Autocomplete
      multiple
      freeSolo
      disableCloseOnSelect
      options={[]}
      value={emails}
      inputValue={inputValue}
      onInputChange={(_, value) => setInputValue(value)}
      onChange={(_, newValue) => setEmails(newValue as string[])}
      renderValue={(_) => (
        <Box display="flex" gap={0.5} overflow="hidden">
          {visibleChips.map((email) => (
            <InviteChip
              key={email}
              email={email}
              onDelete={() => onRemove(email)}
            />
          ))}
          {hiddenChips.length > 0 && (
            <Chip
              label={`+${hiddenChips.length}`}
              size="small"
              onClick={(e) => onShowHidden(e.currentTarget)}
              sx={{ cursor: 'pointer' }}
            />
          )}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Enter emails" />
      )}
      sx={{ flex: '1 1 auto' }}
    />
  );
};
