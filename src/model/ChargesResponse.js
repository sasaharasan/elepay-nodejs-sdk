/**
 * elepay API リファレンス
 * elepay APIはRESTをベースに構成された決済APIです。支払い処理、返金処理など、決済に関わる運用における様々なことができます。 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ChargeDto from './ChargeDto';
import ElepayRestError from './ElepayRestError';

/**
 * The ChargesResponse model module.
 * @module model/ChargesResponse
 * @version 1.0
 */
class ChargesResponse {
    /**
     * Constructs a new <code>ChargesResponse</code>.
     * 支払い情報リスト
     * @alias module:model/ChargesResponse
     */
    constructor() { 
        
        ChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargesResponse} obj Optional instance to populate.
     * @return {module:model/ChargesResponse} The populated <code>ChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargesResponse();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], [ChargeDto]);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ElepayRestError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * 件数
 * @member {Number} total
 */
ChargesResponse.prototype['total'] = undefined;

/**
 * 支払い詳細内容
 * @member {Array.<module:model/ChargeDto>} charges
 */
ChargesResponse.prototype['charges'] = undefined;

/**
 * @member {module:model/ElepayRestError} error
 */
ChargesResponse.prototype['error'] = undefined;






export default ChargesResponse;

