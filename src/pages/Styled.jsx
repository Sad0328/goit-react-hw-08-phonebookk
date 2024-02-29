export const paperMainStyle = photo => ({
  position: 'relative',
  color: '#f656cd',
  mb: 40,
  mt: 20,
  backgroundSize: 'cover',

  backgroundImage: `url(${photo})`,
  minHeight: 500,
  minWidth: 100,
});

export const boxMainStyle = {
  position: 'relative',
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
};

export const boxContactsStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: '#56eef6',
  mx: 'auto',
  borderRadius: 3,
  maxWidth: 700,
  px: 5,
  marginTop: 15,
};
