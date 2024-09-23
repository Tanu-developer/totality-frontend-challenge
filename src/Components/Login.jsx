

// import * as React from 'react';
// import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import CssBaseline from '@mui/joy/CssBaseline';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import { useNavigate } from 'react-router-dom';

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
  
//   if (!mounted) {
//     return <Button variant="soft">Change mode</Button>;
//   }

//   return (
//     <Select
//       variant="soft"
//       value={mode}
//       onChange={(event, newMode) => {
//         setMode(newMode);
//       }}
//       sx={{ width: 'max-content' }}
//     >
//       <Option value="system">System</Option>
//       <Option value="light">Light</Option>
//       <Option value="dark">Dark</Option>
//     </Select>
//   );
// }

// export default function Login() {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleLogin = () => {
//     // Here, you can add authentication logic
//     // For now, just navigate to the PropertyList
//     navigate('/properties'); // Change to your desired route
//   };

//   return (
//     <CssVarsProvider style={{backgrounImage}}>
//       <main>
//         <ModeToggle />
//         <CssBaseline />
//         <Sheet
//           sx={{
//             width: 300,
//             ml: '560px',
//             my: 4,
//             py: 3,
//             px: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//             borderRadius: 'sm',
//             boxShadow: 'md',
//           }}
//           variant="outlined"
//         >
//           <div>
//             <Typography level="h4" component="h1">
//               <b>Welcome!</b>
//             </Typography>
//             <Typography level="body-sm">Sign in to continue.</Typography>
//           </div>
//           <FormControl>
//             <FormLabel>Email</FormLabel>
//             <Input
//               name="email"
//               type="email"
//               placeholder="johndoe@email.com"
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Input
//               name="password"
//               type="password"
//               placeholder="password"
//             />
//           </FormControl>

//           <Button sx={{ mt: 1 }} onClick={handleLogin}>Log in</Button>
//           {/* <Typography
//             endDecorator={<Link href="/sign-up">Sign up</Link>}
//             sx={{ fontSize: 'sm', alignSelf: 'center' }}
//           >
//             Don&apos;t have an account?
//           </Typography> */}
//         </Sheet>
//       </main>
//     </CssVarsProvider>
//   );
// }

import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
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

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    // Add authentication logic here
    navigate('/properties'); // Change to your desired route
  };

  const backgroundImage = 'url(https://tse1.mm.bing.net/th?id=OIP.YGD-NieeGGCDKOwu8NmJPwHaEo&pid=Api&P=0&h=220)'; // Replace with your image path

  return (
    <CssVarsProvider>
      <main style={{ backgroundImage, backgroundSize: 'cover', height: '100vh' }}>
        <ModeToggle />
        <CssBaseline />
        <Sheet
          sx={{
            width: 300,
            ml: 'auto',
            mr: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            bgcolor: 'background.body', // Optional: to give some background to the sheet
            opacity: 0.9 // Optional: adjust for transparency
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
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 }} onClick={handleLogin}>Log in</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
