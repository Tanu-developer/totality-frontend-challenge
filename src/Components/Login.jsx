import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }
}

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/properties');
  };

  const backgroundImage = 'url(http://thewowstyle.com/wp-content/uploads/2015/02/1593566beautiful-beach-houses.jpg)';

  return (
    <CssVarsProvider>
      <main
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModeToggle />
        <CssBaseline />
        <Sheet
          sx={{
            width: 500,
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            textAlign: 'center',
            boxShadow: 'md',
            bgcolor: 'background.body',
            opacity: 0.9,
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              sx={{
                bgcolor: 'background.input',
                '&:hover': {
                  bgcolor: 'background.inputHover',
                },
                '&:focus': {
                  bgcolor: 'background.inputFocus',
                },
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              sx={{
                bgcolor: 'background.input',
                '&:hover': {
                  bgcolor: 'background.inputHover',
                },
                '&:focus': {
                  bgcolor: 'background.inputFocus',
                },
              }}
            />
          </FormControl>

          <Button
            sx={{
              mt: 1,
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              '&:active': {
                bgcolor: 'primary.dark',
                transform: 'scale(0.98)',
              },
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
