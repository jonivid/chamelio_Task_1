import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useEmailInvite } from './useEmailInvite';
import { InviteInput } from './InviteInput';
import { HiddenChipsPopper } from './HiddenChipsPopper';

export const UserInviteAutocomplete: React.FC = () => {
  const maxVisibleChips = 5;

  const {
    emails,
    inputValue,
    error,
    anchorEl,
    popperOpen,
    hiddenChips,
    handleInputChange,
    handleEmailsChange,
    handleRemove,
    showHidden,
    closePopper,
  } = useEmailInvite(maxVisibleChips);

  return (
    <Box
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        gap={2}
        width="100%"
        maxWidth="1200px"
      >
        <InviteInput
          emails={emails}
          inputValue={inputValue}
          setInputValue={handleInputChange}
          setEmails={handleEmailsChange}
          maxVisibleChips={maxVisibleChips}
          onShowHidden={showHidden}
          onRemove={handleRemove}
        />

        <Button
          variant="contained"
          onClick={() => console.log('Submitting:', emails)}
        >
          Add Users ({emails.length})
        </Button>

        <HiddenChipsPopper
          open={popperOpen}
          anchorEl={anchorEl}
          hiddenChips={hiddenChips}
          onClose={closePopper}
          onRemove={handleRemove}
        />
      </Box>

      {error && (
        <Box
          width="100%"
          maxWidth="1200px"
          mt={1}
          display="flex"
          justifyContent="flex-start"
        >
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
