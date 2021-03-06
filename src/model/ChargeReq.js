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
import PaymentMethodType from './PaymentMethodType';

/**
 * The ChargeReq model module.
 * @module model/ChargeReq
 * @version 1.0
 */
class ChargeReq {
    /**
     * Constructs a new <code>ChargeReq</code>.
     * 支払リクエスト
     * @alias module:model/ChargeReq
     */
    constructor() { 
        
        ChargeReq.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChargeReq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargeReq} obj Optional instance to populate.
     * @return {module:model/ChargeReq} The populated <code>ChargeReq</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeReq();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = PaymentMethodType.constructFromObject(data['paymentMethod']);
            }
            if (data.hasOwnProperty('orderNo')) {
                obj['orderNo'] = ApiClient.convertToType(data['orderNo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], {'String': Object});
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': Object});
            }
            if (data.hasOwnProperty('clientIp')) {
                obj['clientIp'] = ApiClient.convertToType(data['clientIp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 金額
 * @member {Number} amount
 */
ChargeReq.prototype['amount'] = undefined;

/**
 * 通貨コード (ISO_4217)
 * @member {String} currency
 * @default 'JPY'
 */
ChargeReq.prototype['currency'] = 'JPY';

/**
 * @member {module:model/PaymentMethodType} paymentMethod
 */
ChargeReq.prototype['paymentMethod'] = undefined;

/**
 * お客様側のシステムオーダーNo（例：注文番号、決済IDなど）
 * @member {String} orderNo
 */
ChargeReq.prototype['orderNo'] = undefined;

/**
 * 決済に関する説明
 * @member {String} description
 */
ChargeReq.prototype['description'] = undefined;

/**
 * 決済に関する追加情報がある場合に利用します。
 * @member {Object.<String, Object>} extra
 */
ChargeReq.prototype['extra'] = undefined;

/**
 * メタデータ
 * @member {Object.<String, Object>} metadata
 */
ChargeReq.prototype['metadata'] = undefined;

/**
 * Client IP アドレス
 * @member {String} clientIp
 */
ChargeReq.prototype['clientIp'] = undefined;






export default ChargeReq;

