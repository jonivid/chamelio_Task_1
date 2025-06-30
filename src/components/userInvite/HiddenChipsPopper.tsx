import React from 'react';
import {
  Popper,
  Paper,
  Box,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InviteChip } from './InviteChip';

interface HiddenChipsPopperProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  hiddenChips: string[];
  onClose: () => void;
  onRemove: (email: string) => void;
}

export const HiddenChipsPopper: React.FC<HiddenChipsPopperProps> = ({
  open,
  anchorEl,
  hiddenChips,
  onClose,
  onRemove,
}) => (
  <Popper
    open={open}
    anchorEl={anchorEl}
    placement="bottom-end"
    disablePortal
    style={{ zIndex: 1300 }}
  >
    <Paper sx={{ p: 1, minWidth: 200 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle2">Hidden Emails</Typography>
        <IconButton size="small" onClick={onClose} aria-label="Close">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Stack spacing={1} mt={1}>
        {hiddenChips.map((email) => (
          <InviteChip
            key={email}
            email={email}
            onDelete={() => onRemove(email)}
            maxWidth={180}
          />
        ))}
      </Stack>
    </Paper>
  </Popper>
);
