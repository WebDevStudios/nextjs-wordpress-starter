import {taxonomies} from '@/lib/wordpress/_config/taxonomies'

/**
 * Check if taxonomy is valid.
 *
 * @author WebDevStudios
 * @param  {string}  taxonomy WP taxonomy.
 * @return {boolean}          Whether provided taxonomy is valid.
 */
export default function isValidTaxonomy(taxonomy) {
  return Object.keys(taxonomies).includes(taxonomy)
}
