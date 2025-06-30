import React from 'react';
import { Chip, Tooltip, Typography } from '@mui/material';

interface InviteChipProps {
  email: string;
  onDelete?: () => void;
  maxWidth?: number;
}

export const InviteChip: React.FC<InviteChipProps> = ({
  email,
  onDelete,
  maxWidth = 120,
}) => (
  <Tooltip title={email}>
    <Chip
      label={
        <Typography
          variant="body2"
          noWrap
          sx={{ maxWidth, textOverflow: 'ellipsis' }}
        >
          {email}
        </Typography>
      }
      size="small"
      onDelete={onDelete}
    />
  </Tooltip>
);
