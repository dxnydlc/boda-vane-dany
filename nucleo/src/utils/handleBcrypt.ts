import * as bcrypt from "bcryptjs";

const SaltOrRounds = 10;

// -----------------------------------------------------------------------------
/**
 \*
  * @param text
  * @returns
 */
async function generateHash( text :string ) : Promise<string> {

    const hash = await bcrypt.hash( text , SaltOrRounds );
    return hash;
}
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
/**
 \*
  * @param plain
  * @param hash
  * @returns
 */
async function comprareHash( plain :string, hash : string ) : Promise<any>
{
    return await bcrypt.compare( plain , hash );
}
// -----------------------------------------------------------------------------


export { generateHash , comprareHash };