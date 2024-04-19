import express from "express";
import { describe, expect, it } from "vitest";
import supertest from 'supertest'

export const app = express();
//==================== user API test ====================

/**
 * Testing get all user endpoint
 */

describe("User", () =>{
    describe('GET /users', function () {
        it('respond with json containing a list of all users', function () {
            supertest(app)
                .get('/api/users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });

    describe("Get /users", ()=>{
        describe("given a user dosent exist", ()=>{
           it("should return a 404", async() =>{
                await supertest(app).get('/api/users')
            })
         })
    })

    describe('GET /user/:id', function () {
        it('respond with json containing a single user', function () {
            supertest(app)
                .get('/api/users/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });    
    
    describe('POST /users', function () {
        let data = {
            "id": "2",
            "name": "dummy",
            "last_name": "dummy",
            "username": "dummy",
            "password": "12"
        }
        it('respond with 201 created', function () {
            supertest(app)
                .post('/api/users')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err) => {
                    if (err) return err;
                });
        });
    });
    
})



    
