// src/pages/main/registration.jsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { GOOGLE_FORM_URL } from '../../config';

export default function Registration() {
  const theme = useTheme();
  const rawUrl = GOOGLE_FORM_URL || '';
  const formUrl = rawUrl.trim();

  if (!formUrl) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Card elevation={3} sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Registration form not configured
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Please set the <strong>VITE_GOOGLE_FORM_URL</strong> environment variable
              in your <code>.env</code> file and restart the app.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f5f7fb', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
              Event Registration
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Secure your spot for the BioTech Alumni Meet. Click the button below to
              open the official registration form in a new tab. The form is hosted by
              Google Forms and will collect your details safely.
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem disableGutters>
                <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
                <ListItemText primary="Quick 2-minute registration" />
              </ListItem>
              <ListItem disableGutters>
                <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
                <ListItemText primary="Data stored securely in Google Forms" />
              </ListItem>
              <ListItem disableGutters>
                <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
                <ListItemText primary="Contact details for event updates" />
              </ListItem>
            </List>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<LaunchIcon />}
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Registration Form
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => window.open(formUrl, '_blank', 'noopener')}
              >
                Open in new tab
              </Button>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
              By submitting the form you agree to our event terms. For privacy details,
              contact the organisers.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={4} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="300"
                image="/assets/registration-hero.jpg"
                alt="Registration"
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
