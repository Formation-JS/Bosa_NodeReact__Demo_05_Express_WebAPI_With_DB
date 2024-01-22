import { Schema } from 'yup';
import express from 'express';
const { Request, Response, NextFunction } = express;

/**
 * Builder du "Body validator" middleware
 * @param {Schema} yupValidator 
 * @param {number} errorCode 
 * @returns { (req: Request, res: Response, next: NextFunction) => Void }
 */
export const bodyValidatorMiddleware = (yupValidator, errorCode = 422) => {

    /**
     * Middleware de validation du Body
     */
    return (req, res, next) => {

        
        yupValidator.noUnknown().validate(req.body, { abortEarly: false})
            .then(data => {

                // Injection des données validé dans l'objet "req"
                req.bodyValidated = data;

                // Appel de la méthode "next"
                next();
            })
            .catch(error => {
                // TODO Add custom error in response
                console.log('BodyValidator', error);

                res.status(errorCode).json({
                    errorMessage: 'Invalid data',
                    errors: []
                })
            });
    };
};

