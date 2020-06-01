import React from 'react';
import { FormattedMessage } from 'react-intl';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import { asyncValidator } from '@redhat-cloud-services/frontend-components-sources';
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';

import { EDIT_FIELD_NAME } from '../../EditField/EditField';

export const genericInfo = (sourceId) => ([
    {
        name: 'source.name',
        label: <FormattedMessage
            id="sources.sourceName"
            defaultMessage="Source name"
        />,
        originalComponent: componentTypes.TEXT_FIELD,
        component: EDIT_FIELD_NAME,
        validate: [
            (value) => asyncValidator(value, sourceId),
            { type: validatorTypes.REQUIRED }
        ],
        isRequired: true
    }, {
        name: 'source_type',
        label: <FormattedMessage
            id="sources.sourceType"
            defaultMessage="Source type"
        />,
        isReadOnly: true,
        component: EDIT_FIELD_NAME,
        isEditable: false
    }
]);
