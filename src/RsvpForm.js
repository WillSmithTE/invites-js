import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useForm } from 'react-hook-form';
import { rsvpApi } from './rsvpApi';

export const RsvpForm = () => {
    const { handleSubmit, register, watch } = useForm();

    const onSubmit = (rsvp) => {
        rsvpApi.add(rsvp);
    };

    return (
        <Container fluid className="container">
            <Header as='h2'>hey</Header>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Enter your name' {...register('name')}/>
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
        </Container>
    )
};
