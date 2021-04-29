import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from 'react-hook-form';
import { rsvpApi } from './rsvpApi';
import { Snackbar } from '@material-ui/core';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from './Alert';

export const RsvpForm = () => {
    const { handleSubmit, register, reset } = useForm();
    const [toastOpen, setToastOpen] = useState(false);

    const onSubmit = async (rsvp) => {
        await rsvpApi.add(rsvp);
        setToastOpen(true);
        reset();
    };

    const handleToastClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToastOpen(false);
    };


    return (
        <Container fluid className="container">
            <Header as='h2'>hey</Header>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Who are you?' {...register('name')} />
                </Form.Field>
                <Form.Field>
                    <label>Attendees</label>
                    <input placeholder='How many peeps are you bringing?' {...register('attendees')} />
                </Form.Field>
                <Form.Field>
                    <label>Comments</label>
                    <input placeholder='Anything else?' {...register('comments')} />
                </Form.Field>

                <Button color="blue" type='submit'>Submit</Button>
            </Form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={toastOpen}
                autoHideDuration={6000}
                onClose={handleToastClose}
            >
                <Alert severity="success">gotcha thanks  &#127773;</Alert>
            </Snackbar>
        </Container>
    )
};
